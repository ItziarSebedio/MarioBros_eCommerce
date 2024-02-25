export interface Product {
    amiiboSeries: string;
    character:    string;
    gameSeries:   string;
    head:         string;
    image:        string;
    name:         string;
    release?:     Release; //al poner el ? indicamos que es opcional, puede venir el dato o no
    tail:         string;
    type:         string;
    id?:          number; //al poner el ? indicamos que es opcional, puede venir el dato o no
    price:        number;
}

export interface Release {
    au: string;
    eu: string;
    jp: string;
    na: string;
}

export interface CartProduct{
    id: number;
    name: string;
    image: string;
    quantity: number;
    price: number
}

