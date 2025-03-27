export interface Slot{
   id: string;
   name: string;
   status: string;
   type: string;
   userId: string | null;
   vehicleNumber: string | null;
}


export interface ReserveSlotCredential{
   companyId: string,
   slotId: string,
   type: string,
   vehicleNumber: string
}


export interface History{
   checkIn: string
   checkOut: string
   companyId: string
   slotName: string
   vehicleNumber: string
}


export interface Parking{
   historyId: string
   name: string
   slotId: string
   status: string
   type: string
   vehicleNumber: string
}


export interface Reservation{
   name: string
   slotId: string
   status: string
   type: string
   vehicleNumber: string
}

export interface CheckOutCredentials{
   slotId: string
   historyId: string
}