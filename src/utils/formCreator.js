import * as yup from 'yup';

export class FormCreator {
  constructor(fields) {
    this.fields = fields;
  }

  getInitialValues() {
    return this.fields.reduce((acc, field) => {
      acc[field.name] = field.value;
      return acc;
    }, {});
  }

  validationSchema() {
    const schema = this.fields.reduce((acc, field) => {
      if (field.validation) {
        acc[field.name] = field.validation;
      }

      return acc;
    }, {});
    return yup.object(schema);
  }

  getFields() {
    return this.fields.map((field) => {
      const { validation, value, ...rest } = field;
      return rest;
    });
  }
}
