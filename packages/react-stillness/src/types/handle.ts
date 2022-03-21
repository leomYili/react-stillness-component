export interface StillnessHandle {
  receiveProps(props: any): void;
  mount(): any;
  unmount(): any;
}

export interface Handle {
  mount(): any;
  unmount(): any;
}
