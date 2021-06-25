export interface invoice {
    userId: string;
    companyId: string;
    receiverLogo: string;
    totalAmount: string;
    taxId: string;
    netAmount: string;
    date: string;
    signatureURL: string;
    invoiceURL: string;
    status: string;
}
