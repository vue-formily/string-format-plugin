import { createLocalVue, mount } from '@vue/test-utils';
import VueFormily from '@vue-formily/formily';
import stringFormat from '@/.';

describe('installation', () => {
  let localVue: any;

  beforeEach(() => {
    localVue = createLocalVue();
  });

  it('Should install by vue-formily `plugins` options successfully', async () => {
    localVue.use(VueFormily, {
      plugins: [stringFormat]
    });

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

  it('Should install by vue-formily `plug` method successfully', async () => {
    VueFormily.plug(stringFormat);

    localVue.use(VueFormily);

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