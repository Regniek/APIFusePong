const Companys = require('./model')
const companysController = {}

companysController.getCompanys = async (req, res, next) => {
  try {
    const companys = await Companys.find()
    res.json({
      status: 200,
      message: 'Companys listed',
      body: companys
    })
  } catch (error) {
    next(error)
  }
}

companysController.getOneCompany = async (req, res, next) => {
  try {
    const company = await Companys.findById(req.params.id)
    res.json({
      status: 200,
      message: 'Company listed',
      body: company
    })
  } catch (error) {
    next(error)
  }
}

companysController.postCompany = async (req, res, next) => {
  try {
    const company = new Companys({
        name: req.body.name,
        nit: req.body.nit,
        phone: req.body.phone,
        address: req.body.address,
        email: req.body.email,
      
    })
    await company.save()
    res.json({
      status: 201,
      message: 'Company created',
      body: company
    })
  } catch (error) {
    next(error)
  }
}

companysController.updateCompany = async (req, res, next) => {
  try {
    const password = await bcrypt.hash(req.body.password, 10)
    const company = {
        name: req.body.name,
        nit: req.body.nit,
        phone: req.body.phone,
        address: req.body.address,
        email: req.body.email,
    }
    await Companys.findByIdAndUpdate(
      req.params.id,
      { $set: company },
      { omitUndefined: true, upsert: true }
    )
    res.json({
      status: 200,
      message: `Company ${req.params.id} updated`,
      body: company
    })
  } catch (error) {
    next(error)
  }
}

companysController.deleteCompany = async (req, res, next) => {
  try {
    await Companys.findByIdAndDelete(req.params.id)
    res.json({
      status: 200,
      message: `Company ${req.params.id} deleted`
    })
  } catch (error) {
    next(error)
  }
}

companysController.getCompanyById = async (req, res, next) => {
  try {
    const company = await Companys.findById(req.companyId)
    res.json({
      state: 200,
      message: 'Company with token listed',
      body: company
    })
  } catch (error) {
    next(error)
  }
}

module.exports = companysController
