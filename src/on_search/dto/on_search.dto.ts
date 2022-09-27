import CatalogInterface from 'src/schemas/Catalog.interface';
import ContextInterface from 'src/schemas/Context.interface';

export class OnSearchDTO {
  context: ContextInterface;
  message: {
    catalog: CatalogInterface;
  };
}
