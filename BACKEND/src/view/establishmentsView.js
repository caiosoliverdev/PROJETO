const DbConnect = require('../database/index');

const establishments = require('../models/establishments');
const establishments_hours = require('../models/establishments_hours');
const establishments_informations = require('../models/establishments_informations');
const establishments_registration = require('../models/establishments_registration');
const establishments_responsible = require('../models/establishments_responsible');

const EstablishmentsViewModel = DbConnect.define('establishments', establishments);
const EstablishmentsHoursViewModel = DbConnect.define('establishments_hours', establishments_hours);
const EstablishmentsInformationsViewModel = DbConnect.define('establishments_informations', establishments_informations);
const EstablishmentsRegistrationViewModel = DbConnect.define('establishments_registration', establishments_registration);
const EstablishmentsResponsibleViewModel = DbConnect.define('establishments_responsible', establishments_responsible);

//#region association of establishment tables
EstablishmentsHoursViewModel.belongsTo(EstablishmentsViewModel, { foreignKey: 'establishmentsId' });
EstablishmentsViewModel.hasOne(EstablishmentsHoursViewModel, { foreignKey: 'establishmentsId' });

EstablishmentsInformationsViewModel.belongsTo(EstablishmentsViewModel, { foreignKey: 'establishmentsId' });
EstablishmentsViewModel.hasOne(EstablishmentsInformationsViewModel, { foreignKey: 'establishmentsId' });

EstablishmentsRegistrationViewModel.belongsTo(EstablishmentsViewModel, { foreignKey: 'establishmentsId' });
EstablishmentsViewModel.hasOne(EstablishmentsRegistrationViewModel, { foreignKey: 'establishmentsId' });

EstablishmentsResponsibleViewModel.belongsTo(EstablishmentsViewModel, { foreignKey: 'establishmentsId' });
EstablishmentsViewModel.hasOne(EstablishmentsResponsibleViewModel, { foreignKey: 'establishmentsId' });
//#endregion

module.exports = {
    EstablishmentsViewModel,
    EstablishmentsHoursViewModel,
    EstablishmentsInformationsViewModel,
    EstablishmentsRegistrationViewModel,
    EstablishmentsResponsibleViewModel
};