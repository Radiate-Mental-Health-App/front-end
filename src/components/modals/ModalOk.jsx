/* eslint-disable react/prop-types */
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalCloseButton,
    ModalFooter,
    ModalHeader,
    ModalBody,
    Text,
    Button
} from "@chakra-ui/react";
import React from "react";

function ModalOk({ modalHeader, modalMessage, isOpen, onOpen, onClose }) {

    React.useEffect(() => {
        if (modalMessage) {
            onOpen();
        }
    }, [modalMessage, onOpen]);

    const handleRedirect = () => {
        onClose();
        window.location.reload();
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose} isCentered>
            <ModalOverlay/>
            <ModalContent>
                <ModalHeader>{modalHeader}</ModalHeader>
                <ModalCloseButton/>
                <ModalBody>
                    <Text>{modalMessage}</Text>
                </ModalBody>
                <ModalFooter>
                    <Button colorScheme="brand" onClick={handleRedirect}>
                        OK
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
}

export default ModalOk;
