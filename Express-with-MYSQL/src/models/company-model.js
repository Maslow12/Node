import mongoose from mongoose
const Schema = mongoose.Schema;

const companySchema = new Schema({
  name: { type: String, required: true },
  url: { type: String, required: true },
  code: { type: Intl, required: true },
}, {
  timestamps: true,
});

const Company = mongoose.model('Company', companySchema);
module.exports = Company;