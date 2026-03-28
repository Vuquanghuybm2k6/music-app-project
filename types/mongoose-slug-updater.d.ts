declare module 'mongoose-slug-updater' {
  import { Schema } from 'mongoose';

  interface SlugOptions {
    slug?: string;
    unique?: boolean;
    separator?: string;
    lowercase?: boolean;
    replace?: RegExp;
    transform?: (value: string) => string;
  }

  interface SlugSchemaType extends Schema.Types.String {
    slug?: string | SlugOptions;
  }

  function slugUpdater(schema: Schema): void;

  export default slugUpdater;
}