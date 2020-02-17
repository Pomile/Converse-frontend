export const toggleComponent = (This) => {
    const display = { ...This.state.display }
    const smallDeviceViewPort = (This.width >= 576 && This.width <= 768)
        || (This.width >= 300 && This.width <= 576);

    if (smallDeviceViewPort && display.messages) {

        display.conversation = true;
        display.messages = false;
        display.comments = false;
        This.setState({ display });
    } else if (smallDeviceViewPort && display.comments) {
        display.conversation = false;
        display.messages = true;
        display.comments = false;
        This.setState({ display });
    } else {
        display.conversation = true;
        display.messages = true;
        display.comments = true;
    }
}
