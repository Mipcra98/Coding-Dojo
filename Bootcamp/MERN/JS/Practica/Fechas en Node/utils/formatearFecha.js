import dayjs from "dayjs"
import 'dayjs/locale/es-mx.js'
dayjs.locale('es-mx')

export const FechaLarga = (fecha) => {
    fecha == '' ? fecha = genFecha() : fecha
    const formatada = dayjs(fecha).locale('es').format('DD [de] MMMM [de] YYYY, hh:mm:ss A [UTC:]Z')
    return formatada
}

export const AntiguedadFecha = (fecha) => {
    fecha == '' ? fecha = genFecha() : fecha
    const respuesta = dayjs().diff(dayjs(fecha),"M")>=24 ? 'Hace más de año' : dayjs().diff(dayjs(fecha),"M")>=12 ? 'Hace 1 año' : dayjs().diff(dayjs(fecha),"M")>=1 ? `Hace ${dayjs().diff(dayjs(fecha),"M")} mes/es` : dayjs().diff(dayjs(fecha),"d")>=1 ? `Hace ${dayjs().diff(dayjs(fecha),"d")} día/s` : dayjs().diff(dayjs(fecha),"h")>=1 ? `Hace ${dayjs().diff(dayjs(fecha),"h")} hora/s` : dayjs().diff(dayjs(fecha),"s")>=60 ? `Hace ${dayjs().diff(dayjs(fecha),"m")} minuto/s` : `Hace ${dayjs().diff(dayjs(fecha),"s")} segundo/s`
    // const diferencia = dayjs().diff(dayjs(fecha))
    // const respuesta = 'Hace:'+dayjs().diff(dayjs(fecha),'y')+dayjs(diferencia).format(' [años] M [meses] d [días] h [horas] m [minutos] y s [segundos]')
    return respuesta
}

export const DiasFecha = (fecha)=>{
    fecha == '' ? fecha = genFecha() : fecha = fecha;
    return dayjs(fecha).format('dddd, DD [de] MMMM [de] YYYY')
}

export const FechaCorta = (fecha)=>{
    fecha == '' ? fecha = genFecha() : fecha = fecha
    const formatada = dayjs(fecha).format('DD/MM/YYYY')
    return formatada
}

const rdm = (max,min)=>{
    let valor = ''
    do{
        valor = Math.round(Math.random()* max)
    }while(valor>=max || valor<min)
    valor = valor<10 ? '0'+valor : valor
    return valor
}

export const genFecha = ()=>{
    let fecha = ''
    let anho = ''
    let mes = ''
    let dia = ''
    let hora = ''
    let min = ''
    let seg = ''
    // let utcOffset = ''
    // let utcPos= ''
    anho = rdm(2025,2000)
    mes = rdm(13,1)
    dia = rdm(31,1)
    hora = rdm(13,0)
    min = rdm(61,0)
    seg = rdm(61,0)
    // utcOffset = rdm(12,0)
    // utcPos = rdm(2,0)
    fecha = `${anho}-${mes}-${dia}T${hora}:${min}:${seg}`   //${utcPos == 1? '+'+utcOffset+'00' :'-'+utcOffset+'00'} para Zona Horaria hay que ver...
    return fecha
}