import { FAQIcon } from 'src/components/Icons/Icons'

const FAQBox = ({ name, phone, website }) => {
  return (
    <div className="mx-auto w-full rounded-lg border-2 p-2 text-left">
      <p className="font-semibold">{name}</p>
      <p className="">{phone}</p>
      <a className="text-blue-500 underline" href={website}>
        {website}
      </a>
    </div>
  )
}

const FaqPage = () => {
  return (
    <div className="w-full px-20">
      <div className="text-center">
        <FAQIcon className={'h-32 w-32'} disabled />
        <p className="text-2xl font-bold">Help</p>
        <div className="mt-10 grid grid-cols-2 gap-6">
          <FAQBox
            name={'Police Department'}
            phone={'911'}
            website={'winnipeg.ca/police'}
          />
          <FAQBox
            name={'Fire Department'}
            phone={'311'}
            website={'winnipeg.ca/fire-help'}
          />
          <FAQBox
            name={'Ambulance Department'}
            phone={'911'}
            website={'winnipeg.ca/ambulance-help'}
          />
          <FAQBox
            name={'Highway Help'}
            phone={'204-346-6266'}
            website={'https://www.gov.mb.ca'}
          />
        </div>
      </div>

      <div className="my-4 grid grid-cols-10 gap-2 rounded-lg border-2 py-2 px-4">
        <div className="col-span-10 text-lg font-bold">Contact us</div>
        <div className="col-span-2">Name:</div>
        <input className="rouned-lg col-span-8 border p-1" />
        <div className="col-span-2">E-mail:</div>
        <input className="rouned-lg col-span-8 border p-1" />
        <div className="col-span-2">Message:</div>
        <input className="rouned-lg col-span-8 h-24 border p-1" />
        <div className="col-span-10">
          <button className="mr-2 rounded-lg border-2 bg-amber-200 py-1 px-2 hover:bg-amber-300">
            Submit
          </button>
          <button className="rounded-lg border-2 bg-amber-50 py-1 px-2 hover:bg-amber-300">
            Cancel
          </button>
        </div>
      </div>
    </div>
  )
}

export default FaqPage
