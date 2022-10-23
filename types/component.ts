import React from "react";

export type Component<T = {}> = React.FC<{ children?: React.ReactNode } & T>