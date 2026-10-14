import Link from "next/link";

const PrivacyPolicy = () => {
  return (
    <div>
      <h2 className="text-xl font-semibold  justify-center flex mb-8 mt-8">
        Refund Policy
      </h2>

      <h2 className="text-xl font-semibold mt-2 justify-center flex mb-8">
        - - - -
      </h2>
      <div>
        <h2 className="text-xl font-semibold mt-2">Returns</h2>
        <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
          <li>
            Our policy lasts 30 days. If 30 days have gone by since your
            purchase, unfortunately we can’t offer you a refund or exchange.
          </li>
        </ul>
        <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
          <li>
            To be eligible for a return, your item must be unused and in the
            same condition that you received it. It must also be in the original
            packaging.
          </li>
        </ul>
        <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
          <li>
            Several types of goods are exempt from being returned. Perishable
            goods such as food, flowers, newspapers or magazines cannot be
            returned. We also do not accept products that are intimate or
            sanitary goods, hazardous materials, or flammable liquids or gases.
          </li>
        </ul>
        <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
          Additional non-returnable items:
        </ul>
        <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
          <li>Gift cards</li>
        </ul>
        <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
          <li>Downloadable software products</li>
        </ul>
        <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
          <li>Some health and personal care items</li>
        </ul>

        <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
          <li>
            To complete your return, we require a receipt or proof of purchase.
          </li>
        </ul>
        <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
          <li>Please do not send your purchase back to the manufacturer.</li>
        </ul>
        <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
          <li>
            There are certain situations where only partial refunds are granted:
            (if applicable) Book with obvious signs of use CD, DVD, VHS tape,
            software, video game, cassette tape, or vinyl record that has been
            opened. Any item not in its original condition, is damaged or
            missing parts for reasons not due to our error. Any item that is
            returned more than 30 days after delivery
          </li>
        </ul>
      </div>
      <div>
        <h2 className="text-xl font-semibold mt-2">Refunds (if applicable)</h2>
        <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
          <li>
            Once your return is received and inspected, we will send you an
            email to notify you that we have received your returned item. We
            will also notify you of the approval or rejection of your refund. If
            you are approved, then your refund will be processed, and a credit
            will automatically be applied to your credit card or original method
            of payment, within a certain amount of days.
          </li>
        </ul>
      </div>

      <div>
        <h2 className="text-xl font-semibold mt-2">
          Late or missing refunds (if applicable)
        </h2>
        <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
          <li>
            If you haven’t received a refund yet, first check your bank account
            again. Then contact your credit card company, it may take some time
            before your refund is officially posted. Next contact your bank.
            There is often some processing time before a refund is posted. If
            you’ve done all of this and you still have not received your refund
            yet, please contact us at{" "}
            <span className=" font-semibold">
              <Link className=" font-semibold" href={"/info@darkfantasy.club"}>
                info@darkfantasy.club
              </Link>
            </span>{" "}
            .
          </li>
        </ul>
      </div>
      <div>
        <h2 className="text-xl font-semibold mt-2">
          Sale items (if applicable)
        </h2>
        <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
          <li>
            Only regular priced items may be refunded, unfortunately sale items
            cannot be refunded.
          </li>
        </ul>
      </div>

      <div>
        <h2 className="text-xl font-semibold mt-2">
          Exchanges (if applicable)
        </h2>
        <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
          <li>
            We only replace items if they are defective or damaged. If you need
            to exchange it for the same item, send us an email at{" "}
            <span className=" font-semibold">
              <Link className=" font-semibold" href={"/info@darkfantasy.club"}>
                info@darkfantasy.club
              </Link>
            </span>{" "}
            . and send your item to: 622 Manglam Electronic Market Jaipur
            Rajasthan India 302001.
          </li>
        </ul>
      </div>

      <div>
        <h2 className="text-xl font-semibold mt-2">Gifts</h2>
        <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
          <li>
            If the item was marked as a gift when purchased and shipped directly
            to you, you’ll receive a gift credit for the value of your return.
            Once the returned item is received, a gift certificate will be
            mailed to you.
          </li>
        </ul>

        <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
          <li>
            If the item wasn’t marked as a gift when purchased, or the gift
            giver had the order shipped to themselves to give to you later, we
            will send a refund to the gift giver and he will find out about your
            return.
          </li>
        </ul>
      </div>

      <div>
        <h2 className="text-xl font-semibold mt-2">Shipping</h2>
        <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
          <li>
            To return your product, you should mail your product to: 622 Manglam
            Electronic Market Jaipur Rajasthan India 302001.
          </li>
        </ul>

        <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
          <li>
            You will be responsible for paying for your own shipping costs for
            returning your item. Shipping costs are non-refundable. If you
            receive a refund, the cost of return shipping will be deducted from
            your refund.
          </li>
        </ul>
        <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
          <li>
            Depending on where you live, the time it may take for your exchanged
            product to reach you, may vary.{" "}
          </li>
        </ul>
        <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc mb-4">
          <li>
            If you are shipping an item over $75, you should consider using a
            trackable shipping service or purchasing shipping insurance. We
            don’t guarantee that we will receive your returned item.
          </li>
        </ul>
      </div>
    </div>
  );
};
export default PrivacyPolicy;
