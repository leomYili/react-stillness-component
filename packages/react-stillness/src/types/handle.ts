export interface StillnessHandle {
  receiveProps(props: any): void;
  mount(): any;
  unmount(): any;
}