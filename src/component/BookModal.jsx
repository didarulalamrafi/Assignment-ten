"use client";

import { authClient } from "@/lib/auth-client";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import { BiEnvelope } from "react-icons/bi";

export function BookingModal({ ownerId, price, productId, title }) {
  const { data: session } = authClient.useSession();
  const user = session?.user;
  console.log(session, "from bookig");
  const bookingHandle = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const bookingInfo = Object.fromEntries(formData.entries());
    const bookingData = {
      ...bookingInfo,
    };
    console.log(bookingData, "from booking");
  };
  return (
    <Modal>
      <Button
        size="lg"
        className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-2 rounded-lg transition"
      >
        Book Now
      </Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Icon className="bg-accent-soft text-accent-soft-foreground"></Modal.Icon>
              <Modal.Heading>Confirm Book</Modal.Heading>
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">
                <form onSubmit={bookingHandle} className="flex flex-col gap-4">
                  <TextField
                    className="w-full"
                    value={user?.name}
                    name="name"
                    type="text"
                    variant="secondary"
                  >
                    <Label>Name</Label>
                    <Input required placeholder="Enter your name" />
                  </TextField>
                  <TextField
                    className="w-full"
                    name="email"
                    value={user?.email}
                    type="email"
                    variant="secondary"
                  >
                    <Label>Email</Label>
                    <Input required placeholder="Enter your email" />
                  </TextField>
                  <TextField
                    className="w-full"
                    name="phone"
                    type="tel"
                    variant="secondary"
                  >
                    <Label>Phone</Label>
                    <Input required placeholder="Enter your phone number" />
                  </TextField>

                  <TextField
                    className="w-full"
                    name="message"
                    variant="secondary"
                  >
                    <Label>Message</Label>
                    <Input required placeholder="Enter your message" />
                  </TextField>
                  <Modal.Footer>
                    <Button slot="close" variant="secondary">
                      Cancel
                    </Button>
                    <form action="/payment" method="POST">
                      <input type="hidden" name="price" value={price} />
                      <input type="hidden" name="title" value={title} />
                      <input type="hidden" name="ownerId" value={ownerId} />
                      <input type="hidden" name="productId" value={productId} />
                      <section>
                        <Button type="submit" role="link" slot="close">
                          Confirm Book
                        </Button>
                      </section>
                    </form>
                  </Modal.Footer>
                </form>
              </Surface>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}
