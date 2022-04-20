import { Coordinate } from '@antv/coord';
import { Selection } from '../../utils/selection';
import { Scale } from './component';

export type G2Theme = {
  defaultColor?: string;
  defaultCategory10?: string;
  defaultCategory20?: string;
  defaultSize?: number;
  elementActiveStroke?: string;
  enter?: {
    duration?: number;
    delay?: number;
    fill?: 'both';
  };
};

export type G2ViewDescriptor = {
  selection: Selection;
  scale: Record<string, Scale>;
  coordinate: Coordinate;
  theme: G2Theme;
};

export type MaybeArray<T> = T | T[];

export type Primitive = number | string | boolean | Date;

export type TabularData = Record<string, Primitive>[];

export type EncodeFunction = (
  data: Record<string, MaybeArray<Primitive>>[],
) => MaybeArray<Primitive>[];

export type Encoding =
  | { type: string; [key: string]: any }
  | Primitive
  | ((...args: any[]) => any);

export type Encodings = Record<string | symbol, MaybeArray<Encoding>>;

export type Value = {
  x?: number[][];
  y?: number[][];
  position?: number[][];
  [key: string]: MaybeArray<Primitive>[];
};
export type IndexedValue = {
  index: number[];
  value: Value;
};

export type ChannelValue = MaybeArray<Primitive>[];
export type Channel = {
  name: string;
  scale?: string;
  required?: boolean;
  value?: ChannelValue;
  type?: string;
  field?: string | string[];
};
export type FlattenChannel = Omit<Channel, 'value'> & { value?: Primitive[] };

export type Vector2 = [number, number];

export type BBox = {
  x?: number;
  y?: number;
  width?: number;
  height?: number;
};

export type GuideComponentPosition =
  | 'top'
  | 'left'
  | 'bottom'
  | 'right'
  | 'centerHorizontal';

export type Layout = {
  paddingLeft?: number;
  paddingRight?: number;
  paddingBottom?: number;
  paddingTop?: number;
  width?: number;
  height?: number;
  innerWidth?: number;
  innerHeight?: number;
  x?: number;
  y?: number;
};

// @todo Using emus.
export type SectionArea = [
  x: number,
  y: number,
  width: number,
  height: number,
  direction: 0 | 1 | -1, // horizontal: 1, vertical: 0, center: -1
  reverse: boolean,
  comparator: (a: Primitive, b: Primitive) => number,
];

export type Section = Record<GuideComponentPosition, SectionArea>;