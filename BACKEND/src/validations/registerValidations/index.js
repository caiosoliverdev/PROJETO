const establishments = require("../../models/establishments");
const establishments_informations = require("../../models/establishments_informations");
const establishments_hours = require("../../models/establishments_hours");
const establishments_registration = require("../../models/establishments_registration");
const establishments_responsible = require("../../models/establishments_responsible");

module.exports = {

    async validationEstablishments(model) {
        try {
            if (!model) {
                return { "erro": true, "message": "A Model ModelEstablishments está faltando." };
            };
            var campos_obrigatorios = [];
            var campos_null = [];
            const Keys = Object.keys(establishments);
            const Keys_ArraY = Keys.slice(1, Keys.length);
            for (let i = 0; i < Keys_ArraY.length; i++) {
                const campo = Keys_ArraY[i];
                const objeto = establishments[campo];
                if (objeto.allowNull === false) {
                    campos_obrigatorios = [...campos_obrigatorios, campo];
                };
            };

            for (let i = 0; i < campos_obrigatorios.length; i++) {
                const campo = campos_obrigatorios[i];
                const value = model[campo] ? model[campo].toString().replace(/\s/g, '') : null;
                if (!value) {
                    campos_null = [...campos_null, campo];
                };
            };

            if (campos_null.length > 0) {
                const CamposFaltantes = `A model ModelEstablishments está faltando os seguintes campos ou valores correspondentes. {${campos_null}}`;
                return { "erro": true, "message": CamposFaltantes, "field": campos_null };
            } else {
                return { "erro": false };
            };
        } catch (error) {
            return { "erro": true, "message": JSON.stringify(error) };
        };
    },

    async validationEstablishments_informations(model) {
        try {
            if (!model) {
                return { "erro": true, "message": "A Model ModelEstablishmentsInformations está faltando." };
            };
            var campos_obrigatorios = [];
            var campos_null = [];
            const Keys = Object.keys(establishments_informations);
            const Keys_ArraY = Keys.slice(1, Keys.length);
            for (let i = 0; i < Keys_ArraY.length; i++) {
                const campo = Keys_ArraY[i];
                const objeto = establishments_informations[campo];
                if (objeto.allowNull === false) {
                    campos_obrigatorios = [...campos_obrigatorios, campo];
                };
            };

            for (let i = 0; i < campos_obrigatorios.length; i++) {
                const campo = campos_obrigatorios[i];
                const value = model[campo] ? model[campo].toString().replace(/\s/g, '') : null;
                if (!value) {
                    campos_null = [...campos_null, campo];
                };
            };

            if (campos_null.length > 0) {
                const CamposFaltantes = `A model ModelEstablishmentsInformations está faltando os seguintes campos ou valores correspondentes. {${campos_null}}`;
                return { "erro": true, "message": CamposFaltantes, "field": campos_null };
            } else {
                return { "erro": false };
            };
        } catch (error) {
            return { "erro": true, "message": JSON.stringify(error) };
        };
    },

    async validationEstablishments_hours(model) {
        try {
            if (!model) {
                return { "erro": true, "message": "A Model ModelEstablishmentsHours está faltando." };
            };
            var campos_obrigatorios = [];
            var campos_null = [];
            const Keys = Object.keys(establishments_hours);
            const Keys_ArraY = Keys.slice(1, Keys.length);
            for (let i = 0; i < Keys_ArraY.length; i++) {
                const campo = Keys_ArraY[i];
                const objeto = establishments_hours[campo];
                if (objeto.allowNull === false) {
                    campos_obrigatorios = [...campos_obrigatorios, campo];
                };
            };

            for (let i = 0; i < campos_obrigatorios.length; i++) {
                const campo = campos_obrigatorios[i];
                const value = model[campo] ? model[campo].toString().replace(/\s/g, '') : null;
                if (!value) {
                    campos_null = [...campos_null, campo];
                };
            };

            if (campos_null.length > 0) {
                const CamposFaltantes = `A model ModelEstablishmentsHours está faltando os seguintes campos ou valores correspondentes. {${campos_null}}`;
                return { "erro": true, "message": CamposFaltantes, "field": campos_null };
            } else {
                return { "erro": false };
            };
        } catch (error) {
            return { "erro": true, "message": JSON.stringify(error) };
        };
    },

    async validationEstablishments_registration(model) {
        try {
            if (!model) {
                return { "erro": true, "message": "A Model ModelEstablishmentsRegistration está faltando." };
            };
            var campos_obrigatorios = [];
            var campos_null = [];
            const Keys = Object.keys(establishments_registration);
            const Keys_ArraY = Keys.slice(1, Keys.length);
            for (let i = 0; i < Keys_ArraY.length; i++) {
                const campo = Keys_ArraY[i];
                const objeto = establishments_registration[campo];
                if (objeto.allowNull === false) {
                    campos_obrigatorios = [...campos_obrigatorios, campo];
                };
            };

            for (let i = 0; i < campos_obrigatorios.length; i++) {
                const campo = campos_obrigatorios[i];
                const value = model[campo] ? model[campo].toString().replace(/\s/g, '') : null;
                if (!value) {
                    campos_null = [...campos_null, campo];
                };
            };

            if (campos_null.length > 0) {
                const CamposFaltantes = `A model ModelEstablishmentsRegistration está faltando os seguintes campos ou valores correspondentes. {${campos_null}}`;
                return { "erro": true, "message": CamposFaltantes, "field": campos_null };
            } else {
                return { "erro": false };
            };
        } catch (error) {
            return { "erro": true, "message": JSON.stringify(error) };
        };
    },

    async validationEstablishments_responsible (model) {
        try {
            if (!model) {
                return { "erro": true, "message": "A Model ModelEstablishmentsResponsible está faltando." };
            };
            var campos_obrigatorios = [];
            var campos_null = [];
            const Keys = Object.keys(establishments_responsible);
            const Keys_ArraY = Keys.slice(1, Keys.length);
            for (let i = 0; i < Keys_ArraY.length; i++) {
                const campo = Keys_ArraY[i];
                const objeto = establishments_responsible[campo];
                if (objeto.allowNull === false) {
                    campos_obrigatorios = [...campos_obrigatorios, campo];
                };
            };

            for (let i = 0; i < campos_obrigatorios.length; i++) {
                const campo = campos_obrigatorios[i];
                const value = model[campo] ? model[campo].toString().replace(/\s/g, '') : null;
                if (!value) {
                    campos_null = [...campos_null, campo];
                };
            };

            if (campos_null.length > 0) {
                const CamposFaltantes = `A model ModelEstablishmentsResponsible está faltando os seguintes campos ou valores correspondentes. {${campos_null}}`;
                return { "erro": true, "message": CamposFaltantes, "field": campos_null };
            } else {
                return { "erro": false };
            };
        } catch (error) {
            return { "erro": true, "message": JSON.stringify(error) };
        };
    }
};