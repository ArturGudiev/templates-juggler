import { Template } from "../../types/template.interface.js";

export default [
    {
       title: 'Template for',
        content: `
    @for (item of items; track item.id) {
     <li>{{ item.name }}</li>
    }
`
    },
    {
        title: 'Template if',
         content: `
     @if (isLoggedIn) {
        <dashboard />
    } @else {
        <login-form />
    }
 `
     },
     {
         title: 'Resource --- ',
          content: `
userId = signal(1);

user = resource({
  params: () => ({ id: this.userId() }), // Следит за id
  loader: ({params}) => fetchUser(params.id)
});
  `
      },
      {
        title: 'Animations --- enter',
         content: `

<div class="enter-container"  animate.enter="enter-animation">
    <p>The box is entering.</p>
</div>

  .enter-animation {
    animation: slide-fade 1s;
  }
  
  @keyframes slide-fade {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
 `
     },
     {
        title: 'Animations --- leave',
         content: `

.leaving {
  opacity: 0;
  transform: translateY(20px);
  transition:
    opacity 500ms ease-out,
    transform 500ms ease-out;
}

.leave-container {
  border: 1px solid #dddddd;
  margin-top: 1em;
  padding: 20px;
  font-weight: bold;
  font-size: 20px;
  opacity: 1;
  transition: opacity 200ms ease-in;

  @starting-style {
    opacity: 0;
  }
}

  .leave-animation {
    animation: slide-fade 1s;
  }
  
  @keyframes slide-fade {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
    
 `
     },
     {
        title: 'take until destroyed',
        content: `
        import {takeUntilDestroyed} from '@angular/core/rxjs-interop';

        ...

         constructor() {
    // This subscription the 'notifications' Observable is automatically
    // unsubscribed when the 'UserProfile' component is destroyed.
    const messages: Observable<string> = this.dispatcher.notifications;
    messages.pipe(takeUntilDestroyed()).subscribe((message) => {
      this.popup.show(message);
    });
  }
        `
     },
     {
        title: '2-way binding signal from parent to child',
        content: `

        import { Component, input, output } from '@angular/core';

        @Component({
          selector: 'app-child',
          template: \`
            <input [value]="user().name" 
                  (input)="onInputChange($event)" />
          \`
        })
        export class ChildComponent {
          user = input<{ name: string }>();
          // Создаем событие для отправки наверх
          userChange = output<{ name: string }>();

          onInputChange(event: Event) {
            const inputElement = event.target as HTMLInputElement;
            // Генерируем событие с новым объектом
            this.userChange.emit({ ...this.user(), name: inputElement.value });
          }
        }



        @Component({
          selector: 'app-parent',
          template: \`
            <app-child [(user)]="parentUser" />
            
            <p>Родитель видит: {{ parentUser().name }}</p>
          \`
        })
        export class ParentComponent {
          // Обычный изменяемый сигнал
          parentUser = signal({ name: 'Alex' }); 
        }
        `
     }
] as Template[];