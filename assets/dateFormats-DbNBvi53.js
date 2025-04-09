class a{constructor(t){this.date=t?new Date(t):new Date}ISO8601(){return this.date.toLocaleDateString("en-CA",{year:"numeric",month:"2-digit",day:"2-digit"}).replace(/\//g,"-")}}export{a as D};
