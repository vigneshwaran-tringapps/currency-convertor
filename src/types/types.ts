export interface currency{
    Base:string,
    rate:ratesValue
}

interface ratesValue{
    "CAD": number,
    "EUR": number,
    "GBP": number,
    "INR": number,
    "USD": number
}