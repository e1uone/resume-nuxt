import mitt from "mitt";

type ApplicationEvents = {
  "form:reset": undefined;
};

const emitter = mitt<ApplicationEvents>();

export const useEvent = emitter.emit;
export const useListen = emitter.on;
