import { Template } from "../types/template.interface.js";

export default [
    {
        title: 'Vue animation (appear from bottom to top)',
        content: `
      <Transition name="fade-slide">
        ...
      </Transition>
      
===========================

.fade-slide-enter-active {
  transition: all 0.4s ease-out;
}

.fade-slide-leave-active {
  transition: all 0.3s ease-in;
}

.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(10px);
}

.fade-slide-leave-to {
  opacity: 0;
}
`
    }
] as Template[];