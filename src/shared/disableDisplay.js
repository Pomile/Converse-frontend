/**
 * Toggles component in conversation container
 * @param {object} This 
 */
export const disableDisplay = (This) => {
    const display = { ...This.state.display }
    const smallDeviceViewPort = (This.width >= 576 && This.width <= 768)
        || (This.width >= 300 && This.width <= 576);

    if (smallDeviceViewPort) {

        display.conversation = true;
        display.messages = false;
        display.comments = false;
        This.setState({ display });
    }
}
