import { formatISO9075, format } from "date-fns"
import { toJS } from "mobx"

export const cpfMask = value => {
    return value
        .replace(/\D/g, '') // substitui qualquer caracter que nao seja numero por nada
        .replace(/(\d{3})(\d)/, '$1.$2') // captura 2 grupos de numero o primeiro de 3 e o segundo de 1, apos capturar o primeiro grupo ele adiciona um ponto antes do segundo grupo de numero
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d{1,2})/, '$1-$2')
        .replace(/(-\d{2})\d+?$/, '$1') // captura 2 numeros seguidos de um traço e não deixa ser digitado mais nada
}

export const cnpjMask = value => {
    return value
        .replace(/\D/g, '') // substitui qualquer caracter que nao seja numero por nada
        .replace(/(\d{2})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d)/, '$1/$2')
        .replace(/(\d{4})(\d{1,2})/, '$1-$2')
        .replace(/(-\d{2})\d+?$/, '$1')
}

export const cepMask = value => {
    return value
        .replace(/\D/g, '') // substitui qualquer caracter que nao seja numero por nada
        .replace(/(\d{5})(\d)/, '$1-$2')
        .replace(/(-\d{3})\d+?$/, '$1')
}

export const moneyMask = (value) => {
    var v = removeMask(value + '');
    v = (v / 100).toFixed(2) + '';
    return (parseFloat(value) < 0 ? '- ' : '') + 'R$ ' + v
        .replace(".", ",")
        .replace(/(\d)(\d{3})(\d{3}),/g, "$1.$2.$3,")
        .replace(/(\d)(\d{3}),/g, "$1.$2,")
}

export const percentMask = (value) => {
    var v = removeMask(value + '');
    v = (v / 100).toFixed(2) + '';
    return '% ' + v
        .replace(".", ",")
        .replace(/(\d)(\d{3})(\d{3}),/g, "$1.$2.$3,")
        .replace(/(\d)(\d{3}),/g, "$1.$2,")
}

export const kgMask = (value) => {
    var v = removeMask(value + '');
    v = (v / 100).toFixed(2) + '';
    return v.replace(".", ",")
        .replace(/(\d)(\d{3})(\d{3}),/g, "$1.$2.$3,")
        .replace(/(\d)(\d{3}),/g, "$1.$2,");
}

export const intPercentMask = (value) => {
    var v = removeMask(value + '');
    return '% ' + v
        .replace(".", ",")
        .replace(/(\d)(\d{3})(\d{3}),/g, "$1.$2.$3,")
        .replace(/(\d)(\d{3}),/g, "$1.$2,")
}

export const listPercentMask = (value) => {
    var v = value + '';
    return v.replace(".", ",") + ' %';
}

export const valueWithDot = (value) => {
    var v = value + '';
    return v.replace(",", ".");
}

export const valueWithComma = (value) => {
    var v = value + '';
    return v.replace(".", ",");
}

export const parseMoney = (value) => {
    return value.replace('R$ ', '').replace('.', '').replace(',', '.');
}
export const parsePercent = (value) => {
    return value.replace('% ', '').replace('.', '').replace(',', '.');
}

export const parseMoneyFloat = (value) => {
    return value.replace('R$ ', '').replace('.', '');
}

export const parseMoneyComma = (value) => {
    return value.replace('R$ ', '');
}

export const parsePercentFloat = (value) => {
    return value.replace('% ', '').replace('.', '');
}

export const telephoneMask = value => {
    if (value.includes('+595')) {
        return removeSpaces(value)
            .replace(/\D/g, '')
            .replace(/(\d{3})(\d{3})(\d{6})$/, '+$1 $2 $3')
    } else if (value.includes('+591')) {
        return removeSpaces(value)
            .replace(/\D/g, '')
            .replace(/(\d{3})(\d{8})$/, '+$1 $2')
    } else if (value.includes('+54')) {
        return removeSpaces(value)
            .replace(/\D/g, '')
            .replace(/(\d{2})(\d{1})(\d{4})(\d{2})(\d{4})$/, '+$1 $2 $3 $4-$5')
    } else if (value.includes('+52')) {
        return removeSpaces(value)
            .replace(/\D/g, '')
            .replace(/(\d{2})(\d{1})(\d{3})(\d{3})(\d{4})$/, '+$1 $2 $3 $4 $5')
    } else if (value.includes('+55')) {
        return removeSpaces(value)
            .replace(/\D/g, '')
            .replace(/(\d{2})(\d{2})(\d{5})(\d{4})$/, '+$1 ($2) $3-$4')
    } else {
        return onlyNumbers(value).length > 10
            ? value
                .replace(/\D/g, '')
                .replace(/(\d{2})(\d)/, '($1)$2')
                .replace(/(\d{5})(\d)/, ' $1-$2')
                .replace(/(-\d{4})\d+?$/, '$1')
            : value
                .replace(/\D/g, '')
                .replace(/(\d{2})(\d)/, '($1)$2')
                .replace(/(\d{4})(\d)/, ' $1-$2')
                .replace(/(-\d{4})\d+?$/, '$1');
    }
}

export const dateMask = value => {
    return value
        .replace(/\D/g, '')
        .replace(/(\d{2})(\d)/, '$1/$2')
        // .replace(/(\d{2})(\d)/, '$1/$2')
        .replace(/(\d{2})(\d{1,2})/, '$1/$2')
        .replace(/(-\d{2})\d+?$/, '$1')
}

export const removeMask = value => {
    return value.replace(/\D+/g, '')
}

export const onlyNumbers = value => {
    return value.toString().replace(/\D+/g, '')
}

export const operationMask = value => {
    return value
        .replace(/\D/g, '')
        .replace(/(\d{3})(\d)/, '$1')
    // .replace(/(-\d{3})\d+?$/, '$1')
}

export const dateCheck = (dateI, dateF) => {
    var date_I = new Date(dateI);
    var date_F = new Date(dateF);
    return format(date_I, "yyyy-MM-dd'T'HH:mm") >= format(date_F, "yyyy-MM-dd'T'HH:mm") ? false : true;
}

export const emailCheck = value => {
    var usuario = value.substring(0, value.indexOf("@"));
    var dominio = value.substring(value.indexOf("@") + 1, value.length);
    return ((usuario.length >= 1) &&
        (dominio.length >= 3) &&
        (usuario.search("@") == -1) &&
        (dominio.search("@") == -1) &&
        (usuario.search(" ") == -1) &&
        (dominio.search(" ") == -1) &&
        (dominio.search(".") != -1) &&
        (dominio.indexOf(".") >= 1) &&
        (dominio.lastIndexOf(".") < dominio.length - 1))
}

export const creditCardNumber = value => {
    value = value.replace(/\D/g, "");
    value = value.replace(/(\d{4})/g, "$1 ");
    value = value.replace(/\.$/, "");
    value = value.substring(0, 19)

    return value;
}

export const creditCardExpiry = value => {
    return value
        .replace(/\D/g, '')
        .replace(/(\d{2})(\d)/, '$1/$2')
        .replace(/(\d{2})(\d)/, '$1')
}

export const creditCardFirstDigits = value => {
    return value.substring(0, 4);
}

export const creditCardLastDigits = (value) => {
    var brand = getCardFlag(value);
    var brandString = isNullOrEmpty(brand) ? getCardFlag(value) : brand;

    return brandString == 'amex' || brandString == 'discovery'
        ? value.substring(10, 15)
        : value.substring(12, 16)
}

export const creditCardCvc = (value, cardNumber = null, brand = null) => {
    var brandString = isNullOrEmpty(brand) ? getCardFlag(cardNumber) : brand;

    return brandString == 'amex' || brandString == 'discovery'
        ? value
            .replace(/\D/g, '')
            .replace(/(\d{4})(\d)/, '$1')
        : value
            .replace(/\D/g, '')
            .replace(/(\d{3})(\d)/, '$1')
}

export const getCardFlag = cardnumber => {
    var cardnumber = cardnumber.replace(/[^0-9]+/g, '');

    var cards = {
        visa: /^4[0-9]{12}(?:[0-9]{3})/,
        mastercard: /^5[1-5][0-9]{14}/,
        diners: /^3(?:0[0-5]|[68][0-9])[0-9]{11}/,
        amex: /^3[47][0-9]{13}/,
        discover: /^6(?:011|5[0-9]{2})[0-9]{12}/,
        hipercard: /^(606282\d{10}(\d{3})?)|(3841\d{15})/,
        elo: /^((((636368)|(438935)|(504175)|(451416)|(636297))\d{0,10})|((5067)|(4576)|(4011))\d{0,12})/,
        jcb: /^(?:2131|1800|35\d{3})\d{11}/,
        aura: /^(5078\d{2})(\d{2})(\d{11})$/
    };

    for (var flag in cards) {
        if (cards[flag].test(cardnumber)) {
            return flag;
        }
    }

    return false;
}

export const sortBy = (data, key) => {
    data = toJS(data);
    console.log(key);
    data = data.sort((a, b) => {
        console.log(a.description);
        return a[key] > b[key];
    });
    console.log(data);
}

export const removeSpaces = (value) => {
    return value.replace(/\s/g, '');
}

export const formatDate = (data) => { // dd/mm/yyyy -> yyyy-mm-dd
    var formatedDate = data.substr(6, 4) + '-' + data.substr(3, 2) + '-' + data.substr(0, 2) + ' 00:00:00';
    return new Date(formatedDate);
}

export const isNullOrEmpty = (value) => {
    return value == '' || value == null;
}

export const isNullOrUndefined = (value) => {
    return value == undefined || value == null;
}

export const prepaymentDaysMask = (value) => {
    return 'D+' + onlyNumbers(value).replace(/(\d{3})(\d)/, '$1');
}

export const instagramMask = (value) => {
    return '@' + value.replace('@', '');
}

export const noInstagramMask = (value) => {
    return '' + value.replace('@', '');
}

export const removeHyphenLowerCase = (value) => {
    return value.replace(/-/g, '').toLowerCase().trim();
}