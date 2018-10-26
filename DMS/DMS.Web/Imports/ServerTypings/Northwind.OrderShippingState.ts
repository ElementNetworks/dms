namespace DMS.Northwind {
    export enum OrderShippingState {
        NotShipped = 0,
        Shipped = 1
    }
    Serenity.Decorators.registerEnumType(OrderShippingState, 'DMS.Northwind.OrderShippingState', 'Northwind.OrderShippingState');
}

