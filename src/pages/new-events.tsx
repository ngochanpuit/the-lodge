import Button from '@/components/Button';
import Spinner from '@/components/Spinner';
import Admin from '@/layout/Admin';
import { useContext, useState } from 'react';
import { firebaseConfig, formEventControls } from '@/utils';
import { GlobalContext } from '@/contexts';
import { initializeApp } from 'firebase/app';
import { getStorage, uploadBytesResumable, ref, getDownloadURL } from 'firebase/storage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const app = initializeApp(firebaseConfig);
const storage = getStorage(app, 'gs://the-lodge-2023.appspot.com');

function createUniqueFileName(fileName: string) {
  const timeStamp = Date.now();
  const randomString = Math.random().toString(36).substring(2, 12);

  return `${fileName}-${timeStamp}-${randomString}`;
}

async function handleImageSaveToFirebase(file: any) {
  const extrattUniqueFileName = createUniqueFileName(file?.name);
  const storageRef = ref(storage, `events/${extrattUniqueFileName}`);
  const uploadImg = uploadBytesResumable(storageRef, file);
  return new Promise((resole, reject) => {
    uploadImg.on(
      'state_changed',
      (snapshot) => {},
      (error) => reject(error),
      () => {
        getDownloadURL(uploadImg.snapshot.ref)
          .then((url) => resole(url))
          .catch((error) => reject(error));
      },
    );
  });
}
export default function CreateNewEvents() {
  const [imgSelected, setImgSelected] = useState<string>('');
  const { formData, setFormData } = useContext(GlobalContext);

  const onImageChange = (event: any) => {
    if (event.target.files && event.target.files[0]) {
      setImgSelected(URL.createObjectURL(event.target.files[0]) as string);
      console.log(typeof URL.createObjectURL(event.target.files[0]));
    }
  };

  async function handleEventImageChange(event: React.ChangeEvent<HTMLInputElement>) {
    if (!event.target.files) return;
    const saveImageToFirebase: any = await handleImageSaveToFirebase(event.target.files[0]);
    if (saveImageToFirebase !== '') {
      setImgSelected('');
      setFormData({ ...formData, image: saveImageToFirebase });
    }
  }

  return (
    <Admin>
      <div>
        <section className="overflow-hidden">
          <div className="container">
            <div className="mx-4 lg: flex flex-wrap">
              <div className="rounded-md bg-primary/[3%] dark:bg-dark">
                <h2 className="mb-3 text-2xl font-bold text-black sm:text-3xl lg:text-2xl xl:text-3xl">
                  Tạo sự kiện mới
                </h2>
                <div>
                  <div className="flex flex-col gap-3">
                    <div className="flex gap-3">
                      <div className="w-full">
                        <label className="mb-3 block text-sm font-medium">Chọn hình ảnh</label>
                        {imgSelected && (
                          <div className="relative">
                            {imgSelected && (
                              <img className="w-5/6 h-1/2" src={imgSelected} alt="Preview image" />
                            )}
                            <br />
                            <button
                              className="absolute top-0 right-0 text-red-600 text-4xl border border-red-600 px-2 font-bold"
                              onClick={() => setImgSelected('')}
                            >
                              x
                            </button>
                          </div>
                        )}
                        <input
                          id="fileinput"
                          accept="*"
                          max={1000000}
                          type="file"
                          onChange={onImageChange}
                          className="w-full mb-8 rounded-md border py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                        />
                      </div>
                    </div>

                    <div className="-mx-4 flex flex-wrap">
                      {formEventControls.map((control, index) => (
                        <div key={index} className="w-full px-4">
                          <label className="mb-3 block text-sm font-medium">{control.label}</label>
                          {control.component === 'input' ? (
                            <input
                              type={control.type}
                              name={control.id}
                              placeholder={control.placeholder}
                              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                setFormData({
                                  ...formData,
                                  [control.id]: event.target.value,
                                });
                              }}
                              // value={formData[control.id as keyof BlogFormData]}
                              className="w-full mb-8 rounded-md border py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                            />
                          ) : control.component === 'textarea' ? (
                            <textarea
                              placeholder={control.placeholder}
                              rows={5}
                              name={control.id}
                              onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => {
                                setFormData({
                                  ...formData,
                                  [control.id]: event.target.value,
                                });
                              }}
                              // value={formData[control.id as keyof BlogFormData]}
                              className="w-full resize-none rounded-md border py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                            />
                          ) : null}
                        </div>
                      ))}
                      <div className="w-full mt-4 px-4">
                        <Button text="Đăng lên" onClick={() => {}} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Admin>
  );
}
