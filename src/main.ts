import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { MainModule } from '@presentation/modules/main/main.module';

platformBrowserDynamic()
  .bootstrapModule(MainModule)
  .catch((err) => console.error(err));
