import { ICountry } from './country.interface';
import { IPort } from './port.interface';
export type DepsCode = {
  code: string;
  name: string;
  default: boolean;
};
export class Port implements IPort {
  id: number;
  name: string;
  country?: ICountry;
  timeZone: number;

  constructor(port: IPort) {
    this.id = port.id;
    this.name = port.name;
    this.country = port.country;
    this.timeZone = port.timeZone;
  }
}
