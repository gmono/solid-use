import {Observable} from "rxjs"
import { createSignal, onCleanup } from "solid-js"
/**
 * 使用一个可观察的值并返回一个signal
 * @param obj 目标Observable
 * @returns 
 */
export default function useObservable<T>(obj:Observable<T>){
    const [value,setvalue]=createSignal<T|undefined>(undefined)
    let sub=obj.subscribe(v=>{
        setvalue(()=>v)
    })
    onCleanup(()=>{
        sub.unsubscribe()
    })
    return [value,setvalue]

}