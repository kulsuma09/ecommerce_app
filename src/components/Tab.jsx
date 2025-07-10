import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

export default function TransparentTabs() {
  const data = [
    {
      label: "Description",
      value: "description",
      content: (
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Information</h2>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.
            Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse
            urna viverra non, semper suscipit, posuere a, pede. Donec nec justo eget
            felis facilisis fermentum. Aliquam porttitor mauris sit amet orci.
          </p>
          <ul className="list-disc list-inside text-gray-800 space-y-1">
            <li>Faux suede fabric</li>
            <li>Gold tone metal hoop handles.</li>
            <li>RI branding</li>
            <li>Snake print trim interior</li>
          </ul>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.
            Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse
            urna viverra non, semper suscipit, posuere a, pede. Donec nec justo eget
            felis facilisis fermentum. Aliquam porttitor mauris sit amet orci.
          </p>
        </div>
      ),
    },
    {
      label: "Additional Information",
      value: "additional-info",
      content: (
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Information</h2>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.
            Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse
            urna viverra non, semper suscipit, posuere a, pede. Donec nec justo eget
            felis facilisis fermentum. Aliquam porttitor mauris sit amet orci.
          </p>
          <p><strong>Fabric & care</strong></p>
          <ul className="list-disc list-inside text-gray-800 space-y-1">
            <li>Faux suede fabric</li>
            <li>Gold tone metal hoop handles.</li>
            <li>RI branding</li>
            <li>Snake print trim interior</li>
          </ul>
          <p className="text-gray-700"><strong>Size</strong></p>
          <p>one size</p>
        </div>
      ),
    },
    {
      label: "Shipping & Returns",
      value: "shipping-returns",
      content: (
        <div className="space-y-4 text-gray-700">
            <h3 className="font-bold text-xl">Delivery & returns</h3>
          <p>
            We deliver to over 100 countries around the world. For full details of the
            delivery options we offer, please view our Delivery information.
          </p>
          <p>
            We hope you’ll love every purchase, but if you ever need to return an item
            you can do so within a month of receipt. For full details of how to make a
            return, please view our Returns information.
          </p>
        </div>
      ),
    },
    {
      label: "Reviews (4)",
      value: "reviews",
      content: (
        <p className="text-gray-700">
          Because it's about motivating the doers. Because I'm here to follow my dreams
          and inspire other people to follow their dreams, too.
        </p>
      ),
    },
  ];

  return (
    <Tabs value="description" className="max-w-4xl mx-auto">
      <TabsHeader
        className="border-b border-gray-200 py-4"
        indicatorProps={{
          className:"border-b-2 border-purple-600 rounded-none shadow-none bg-transparent",
        }}
      >
        {data.map(({ label, value }) => (
          <Tab
            key={value}
            value={value}
            className="font-bold text-lg text-[#3E0478] hover:text-gray-900"
          >
            {label}
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody>
        {data.map(({ value, content }) => (
          <TabPanel key={value} value={value} className="py-6">
            {content}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
}
