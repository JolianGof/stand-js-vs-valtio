import { useSnapshot } from 'valtio'
import { store } from '../../stores/valtio-store'

const Sales = () => {
    const snap = useSnapshot(store)
  return (
    <div>{Object.values(snap?.company?.departments?.sales?.employees).map((value)=>{

        return (
            <div>sales</div>
        )
    })}</div>
  )
}

export default Sales