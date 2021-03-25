import { useMemo } from "react";
import {
  Jezero,
  Slap,
  Koca,
  Pohodnistvo,
  KulturnaDediscina,
  PoletnaOsvezitev,
  PlezanjeFerata,
  NaravneLepote,
  Zemljevid,
  Supanje,
  Bivak,
  Cerkev,
  Drugo as Pin,
  Dvorec,
  Ferata,
  Grad,
  Hrib,
  Izvir,
  Jama,
  Kopalisce,
  NaravniMuzej,
  Planina,
  RazgledniStolp,
  Soteska,
  Sup,
} from "../icons";

export default function useIcons() {
  const poiTypesIcons = useMemo(
    () => ({
      jezero: Jezero,
      slap: Slap,
      koca: Koca,
      bivak: Bivak,
      cerkev: Cerkev,
      drugo: Pin,
      dvorec: Dvorec,
      ferata: Ferata,
      grad: Grad,
      hrib: Hrib,
      izvir: Izvir,
      jama: Jama,
      kopalisce: Kopalisce,
      "muzej-na-prostem": NaravniMuzej,
      planina: Planina,
      "razgledni-stolp": RazgledniStolp,
      soteska: Soteska,
      "sup-tocka": Sup,
    }),
    []
  );

  const interestsIcons = useMemo(
    () => ({
      pohodnistvo: Pohodnistvo,
      kultura: KulturnaDediscina,
      "poletna-osvezitev": PoletnaOsvezitev,
      feratanje: PlezanjeFerata,
      "naravne-lepote": NaravneLepote,
      raziskovanje: Zemljevid,
      supanje: Supanje,
    }),
    []
  );

  return { poiTypesIcons, interestsIcons };
}
