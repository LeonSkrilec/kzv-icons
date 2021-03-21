import { useMemo } from 'react'
import {
  Jezero,
  Slap,
  Koca,
  Pohodnistvo,
  Zastava,
  Voda,
  PlezanjeFerata,
  Roza,
  Zemljevid,
  Supanje,
  Bivak,
  Cerkev,
  Pin,
  Dvorec,
  Ferata,
  Grad,
  Hrib,
  Izvir,
  Jama,
  Kopalisce,
  Drevesa,
  Planina,
  RazgledniStolp,
  Soteska,
  Sup
} from '../icons'

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
      'muzej-na-prostem': Drevesa,
      planina: Planina,
      'razgledni-stolp': RazgledniStolp,
      soteska: Soteska,
      'sup-tocka': Sup
    }),
    []
  )

  const interestsIcons = useMemo(
    () => ({
      pohodnistvo: Pohodnistvo,
      kultura: Zastava,
      'poletna-osvezitev': Voda,
      feratanje: PlezanjeFerata,
      'naravne-lepote': Roza,
      raziskovanje: Zemljevid,
      supanje: Supanje
    }),
    []
  )

  return { poiTypesIcons, interestsIcons }
}
