import React from 'react';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, Button } from '@chakra-ui/react';

const ProductModal = ({ isOpen, onClose, product }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{product.name}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <p>{product.description}</p>
          <Button colorScheme="pink" onClick={onClose}>Schließen</Button>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ProductModal;
