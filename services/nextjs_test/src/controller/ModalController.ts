type FlagState = [
  number,
  (newFlag: number | ((prevFlag: number) => number)) => void,
];

type ModalInfo = {
  key: string;
  Component: React.ComponentType<any>;
  props: object;
  resolve: (value: any) => void;
  reject: (reason?: any) => void;
};

export default class ModalController {
  private flagState: FlagState;
  private modalInfos: ModalInfo[] = [];

  constructor(flagState: FlagState) {
    this.flagState = flagState;
  }

  private flush() {
    const [_, setFlag] = this.flagState;
    setFlag((prev: number) => prev + 1);
  }

  get top() {
    return this.modalInfos[this.modalInfos.length - 1];
  }

  private handlePromise(
    key: string,
    resolver: (value: any) => void,
    value: any,
  ) {
    resolver(value);
    this.modalInfos = this.modalInfos.filter(({ key: _key }) => key !== _key);
  }

  async push(key: string, Component: React.ComponentType<any>, props: object) {
    return await new Promise((resolve, reject) => {
      this.modalInfos.push({
        key,
        Component,
        props,
        resolve: (value) => this.handlePromise(key, resolve, value),
        reject: (reason) => this.handlePromise(key, reject, reason),
      });
      this.flush();
    });
  }

  pop() {
    this.top?.reject(`Close modal: ${this.top.key}`);
    this.modalInfos.pop();
    this.flush();
  }

  clear() {
    while (this.top) this.pop();
  }
}
