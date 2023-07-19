"use client";

import ButtonLink from "@/components/atoms/ButtonLink";
import AccountNavigation from "@/components/organism/AccountNavigation";
import UpdateProfileForm from "@/components/organism/forms/UpdateProfileForm";
import Container from "@/components/templates/Container";

const Account = () => {
  return (
    <>
      <Container className="mt-[104px]">
        <div className="flex flex-col gap-6 2md:flex-row 2md:gap-9">
          <AccountNavigation />
          <UpdateProfileForm />
        </div>
      </Container>
    </>
  )
}

export default Account;