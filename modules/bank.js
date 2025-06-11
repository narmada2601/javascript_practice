export const bankName = "HDFC Bank";


export function openAccount(customerName){
    return `${customerName}'s account opened in ${bankName}`;
}


export function getBalance(customerName , amount){
    return `Balance for Account ${customerName} ${amount}`;
}
