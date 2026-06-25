"use client"
import { Button, Modal } from "@heroui/react";
import { useEffect, useState } from "react";
import { BiRocket } from "react-icons/bi";
import { FaEye } from "react-icons/fa";

export function OwnerRejectDsiplayModal({ title }) {

    const [reject, setReject] = useState('')
    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/rejectowner?title=${title}`)
            .then(res => res.json())
            .then(data => setReject(data))
    }, [title])
    console.log(reject, 'from useeffect');
    return (
        <Modal>
            <Button variant="secondary"><FaEye /></Button>
            <Modal.Backdrop>
                <Modal.Container>
                    <Modal.Dialog className="sm:max-w-[360px]">
                        <Modal.CloseTrigger />
                        <Modal.Header>
                            <Modal.Icon className="bg-default text-foreground">
                                <BiRocket className="size-5" />
                            </Modal.Icon>
                            <Modal.Heading>{reject?.title}</Modal.Heading>
                        </Modal.Header>
                        <Modal.Body>
                            {reject?.message}
                            {/* <p>
                                A beautiful, fast, and modern React UI library for building accessible and
                                customizable web applications with ease.
                            </p> */}
                        </Modal.Body>
                        <Modal.Footer>
                            <Button className="w-full" slot="close">
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
}