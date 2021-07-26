import React from 'react';
import { useSpring } from '@react-spring/three';
import { SIDE } from '../constants';
import { colors } from '../colors';
import { Shape } from '../meshes/Shape';

export const ComponentDriven = ({ step }) => {
  const springI = useSpring(STATES[step]['I']);
  const springL = useSpring(STATES[step]['L']);
  const springZ = useSpring(STATES[step]['Z']);
  const springT = useSpring(STATES[step]['T']);
  const springO = useSpring(STATES[step]['O']);

  return (
    <group
      position={[-2 * SIDE, -SIDE / 2, -SIDE]}
      rotation={[-Math.PI / 2, 0, 0]}
    >
      <Shape
        type="I"
        castShadow
        receiveShadow
        position={springI.position}
        color={springI.color}
      />
      <Shape
        type="L"
        castShadow
        receiveShadow
        position={springL.position}
        color={springL.color}
      />
      <Shape
        type="Z"
        castShadow
        receiveShadow
        position={springZ.position}
        color={springZ.color}
      />
      <Shape
        type="T"
        castShadow
        receiveShadow
        position={springT.position}
        color={springT.color}
      />
      <Shape
        type="O"
        castShadow
        receiveShadow
        position={springO.position}
        color={springO.color}
      />
    </group>
  );
};

const STATES = [
  {
    I: { position: [0, 0, 10 * SIDE], color: colors.purple },
    L: { position: [0, -3 * SIDE, SIDE], color: colors.ocean },
    Z: { position: [2 * SIDE, -3 * SIDE, 10 * SIDE], color: colors.coral },
    T: { position: [3 * SIDE, -2 * SIDE, 10 * SIDE], color: colors.gold },
    O: { position: [3 * SIDE, -3 * SIDE, 10 * SIDE], color: colors.green },
  },
  {
    I: {
      delay: (key) => (key === 'color' ? 500 : 0),
      position: [0, 0, 10 * SIDE],
      color: colors.purple,
    },
    L: {
      delay: (key) => (key === 'color' ? 500 : 0),
      position: [0, -3 * SIDE, 0],
      color: colors.coral,
    },
    Z: {
      delay: (key) => (key === 'color' ? 500 : 0),
      position: [2 * SIDE, -3 * SIDE, 0],
      color: colors.coral,
    },
    T: {
      delay: (key) => (key === 'color' ? 500 : 0),
      position: [3 * SIDE, -2 * SIDE, 10 * SIDE],
      color: colors.gold,
    },
    O: {
      delay: (key) => (key === 'color' ? 500 : 0),
      position: [3 * SIDE, -3 * SIDE, 10 * SIDE],
      color: colors.green,
    },
  },
  {
    I: {
      delay: (key) => (key === 'color' ? 500 : 100),
      position: [0, 0, 0],
      color: colors.purple,
    },
    L: {
      delay: (key) => (key === 'color' ? 500 : 0),
      position: [0, -3 * SIDE, 0],
      color: colors.purple,
    },
    Z: {
      delay: (key) => (key === 'color' ? 500 : 0),
      position: [2 * SIDE, -3 * SIDE, 0],
      color: colors.purple,
    },
    T: {
      delay: (key) => (key === 'color' ? 500 : 50),
      position: [3 * SIDE, -2 * SIDE, 0],
      color: colors.purple,
    },
    O: {
      delay: (key) => (key === 'color' ? 500 : 0),
      position: [3 * SIDE, -3 * SIDE, 0],
      color: colors.purple,
    },
  },
  {
    I: {
      delay: (key) => (key === 'color' ? 500 : 0),
      position: [0, 0, SIDE],
      color: colors.purple,
    },
    L: {
      delay: (key) => (key === 'color' ? 500 : 0),
      position: [0, -3 * SIDE, SIDE],
      color: colors.purple,
    },
    Z: {
      delay: (key) => (key === 'color' ? 500 : 0),
      position: [2 * SIDE, -3 * SIDE, SIDE],
      color: colors.purple,
    },
    T: {
      delay: (key) => (key === 'color' ? 500 : 0),
      position: [3 * SIDE, -2 * SIDE, SIDE],
      color: colors.purple,
    },
    O: {
      delay: (key) => (key === 'color' ? 500 : 0),
      position: [3 * SIDE, -3 * SIDE, SIDE],
      color: colors.purple,
    },
  },
];