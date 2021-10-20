export interface currency{
    base:string,
    rate:ratesValue
}

export interface ratesValue{
    "CAD": number,
    "EUR": number,
    "GBP": number,
    "INR": number,
    "USD": number
}