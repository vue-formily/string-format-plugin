import { createLocalVue, mount } from '@vue/test-utils';
import { createFormily } from '@vue-formily/formily';
import stringFormat from '@/.';

describe('Installation', () => {
  let localVue: any;

  beforeEach(() => {
    localVue = createLocalVue();
  });

  it('Should install by vue-formily `plug` method successfully', async () => {
    const formily = createFormily();

    formily.plug(stringFormat);

    localVue.use(formily);

    const wrapper = mount(
      {
        template: '<div></div>'
      },
      {
        localVue
      }
    );

    const vm = wrapper.vm as any;

    vm.$formily.addForm({
      formId: 'test',
      fields: [
        {
          formId: 'a',
          value: 'test',
          format: '{value}',
          on: {
            validated(field: any) {
              expect(field.formatted).toBe('test');
            }
          }
        }
      ]
    });
  });
});
