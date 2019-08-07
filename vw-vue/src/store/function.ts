class LocalEvent {
  public item: string;
  constructor(item: string) {
    this.item = item;
  }

  public get() {
    const loacl = sessionStorage.getItem(this.item);
    return loacl ? JSON.parse(loacl) : '';
  }

  public set(obj: any) {
    sessionStorage.setItem(this.item, JSON.stringify(obj));
  }

  public clear() {
    sessionStorage.removeItem(this.item);
  }
}

export const local = new LocalEvent('yd_gw');

