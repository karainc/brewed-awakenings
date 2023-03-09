import { getEmployees, getOrders } from "./database.js"



const employees = getEmployees()
const orders = getOrders()


export const Employees = () => {
    let employeeHTML = "<ul>"

    for (const employee of employees) {
        employeeHTML += `<li id="employee--${employee.id}">${employee.name}</li>`
    }

    employeeHTML += "</ul>"

    return employeeHTML
}
//the function needs the employee info, so defiining a parameter//
const filterEmployeeOrdersbyOrder = (employee) => {
    let numberOfOrders = 0
    for (const order of orders) {
        if (order.employeeId === employee.id){
            numberOfOrders <= 16; numberOfOrders++
            //console.log(numberOfOrders)
        }
    }
    return numberOfOrders
}
    // for (const order of employeeOrders) {
    //     if (order.employeeId === employee.id) {
    //         orders.push(order)
    //     }
    
    // return orders.join(" and ")
    


document.addEventListener(
    "click",  // This is the type of event
    (clickEvent) => {
        
        const itemClicked = clickEvent.target
        
        if (itemClicked.id.startsWith("employee")) {
            
            const [,employeeId] = itemClicked.id.split("--")
            
            for (const employee of employees) {
                if ( employee.id === parseInt(employeeId)) {
                   const numberOfOrders = filterEmployeeOrdersbyOrder(employee)
                    
                
                window.alert(`${employee.name} has sold ${numberOfOrders}products.`)}
            }
            }
        }
        )