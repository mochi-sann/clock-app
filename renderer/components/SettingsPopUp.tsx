import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Button,
  useDisclosure,
  ModalCloseButton,
  IconButton,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
} from "@chakra-ui/react";
import { SVGProps } from "react";

export function ClaritySettingsSolid(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      focusable="false"
      width="1em"
      height="1em"
      viewBox="0 0 36 36"
      {...props}
    >
      <path
        className="clr-i-solid clr-i-solid-path-1"
        d="M32.57 15.72l-3.35-1a11.65 11.65 0 0 0-.95-2.33l1.64-3.07a.61.61 0 0 0-.11-.72l-2.39-2.4a.61.61 0 0 0-.72-.11l-3.05 1.63a11.62 11.62 0 0 0-2.36-1l-1-3.31a.61.61 0 0 0-.59-.41h-3.38a.61.61 0 0 0-.58.43l-1 3.3a11.63 11.63 0 0 0-2.38 1l-3-1.62a.61.61 0 0 0-.72.11L6.2 8.59a.61.61 0 0 0-.11.72l1.62 3a11.63 11.63 0 0 0-1 2.37l-3.31 1a.61.61 0 0 0-.43.58v3.38a.61.61 0 0 0 .43.58l3.33 1a11.62 11.62 0 0 0 1 2.33l-1.64 3.14a.61.61 0 0 0 .11.72l2.39 2.39a.61.61 0 0 0 .72.11l3.09-1.65a11.65 11.65 0 0 0 2.3.94l1 3.37a.61.61 0 0 0 .58.43h3.38a.61.61 0 0 0 .58-.43l1-3.38a11.63 11.63 0 0 0 2.28-.94l3.11 1.66a.61.61 0 0 0 .72-.11l2.39-2.39a.61.61 0 0 0 .11-.72l-1.66-3.1a11.63 11.63 0 0 0 .95-2.29l3.37-1a.61.61 0 0 0 .43-.58v-3.41a.61.61 0 0 0-.37-.59zM18 23.5a5.5 5.5 0 1 1 5.5-5.5a5.5 5.5 0 0 1-5.5 5.5z"
        fill="currentColor"
      ></path>
    </svg>
  );
}

function BasicUsage() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <IconButton
        borderRadius="full"
        mr="2"
        onClick={onOpen}
        aria-label="Search database"
        icon={<ClaritySettingsSolid />}
      />

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>設定</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Table variant="simple">
              <TableCaption>Imperial to metric conversion factors</TableCaption>
              <Thead>
                <Tr>
                  <Th>To convert</Th>
                  <Th>into</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>inches</Td>
                  <Td>millimetres (mm)</Td>
                </Tr>
                <Tr>
                  <Td>feet</Td>
                  <Td>centimetres (cm)</Td>
                </Tr>
                <Tr>
                  <Td>yards</Td>
                  <Td>metres (m)</Td>
                </Tr>
              </Tbody>
            </Table>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default BasicUsage;
