module.exports = class {
  constructor (
    country,
    campaign,
    origin,
    consultantCode,
    zoneCode,
    searchText,
    personalizations,
    configurations
  ) {
    this.country = country
    this.campaign = campaign
    this.origin = origin
    this.consultantCode = consultantCode
    this.zoneCode = zoneCode
    this.searchText = searchText
    this.personalizationsDummy = personalizations
    this.configurations = {
      businessPartner: configurations.sociaEmpresaria,
      activeSubscription: configurations.suscripcionActiva.toLowerCase() === 'true',
      mdo: configurations.mdo.toLowerCase() === 'true',
      rd: configurations.rd.toLowerCase() === 'true',
      rdi: configurations.rdi.toLowerCase() === 'true',
      rdr: configurations.rdr.toLowerCase() === 'true',
      billingDay: configurations.diaFacturacion,
      isBilling: configurations.esFacturacion
    }
  }
}
