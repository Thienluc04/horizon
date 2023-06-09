import { SpeInput, Specifications, SpecificationsInput } from 'models';
import axiosClient from './axiosClient';

export const specificationsApi = {
  // GET
  getCpus(keyWord?: string): Promise<Specifications[]> {
    const url = '/getCpu.php';
    return axiosClient.get(url, {
      params: {
        keyWord,
      },
    });
  },
  getVgas(keyWord?: string): Promise<Specifications[]> {
    const url = '/getVga.php';
    return axiosClient.get(url, {
      params: {
        keyWord,
      },
    });
  },
  getRams(keyWord?: string): Promise<Specifications[]> {
    const url = '/getRam.php';
    return axiosClient.get(url, {
      params: {
        keyWord,
      },
    });
  },
  getScreens(keyWord?: string): Promise<Specifications[]> {
    const url = '/getScreen.php';
    return axiosClient.get(url, {
      params: {
        keyWord,
      },
    });
  },
  getOS(keyWord?: string): Promise<Specifications[]> {
    const url = '/getOS.php';
    return axiosClient.get(url, {
      params: {
        keyWord,
      },
    });
  },
  getColors(keyWord?: string): Promise<Specifications[]> {
    const url = '/getColor.php';
    return axiosClient.get(url, {
      params: {
        keyWord,
      },
    });
  },
  getDisks(keyWord?: string): Promise<Specifications[]> {
    const url = '/getDisk.php';
    return axiosClient.get(url, {
      params: {
        keyWord,
      },
    });
  },

  // POST
  insertCpu(data: SpeInput): Promise<number> {
    const url = '/insertCpu.php';
    return axiosClient.post(url, { ...data });
  },
  insertVga(data: SpeInput): Promise<number> {
    const url = '/insertVga.php';
    return axiosClient.post(url, { ...data });
  },
  insertRam(data: SpeInput): Promise<number> {
    const url = '/insertRam.php';
    return axiosClient.post(url, { ...data });
  },
  insertScreen(data: SpeInput): Promise<number> {
    const url = '/insertScreen.php';
    return axiosClient.post(url, { ...data });
  },
  insertOS(data: SpeInput): Promise<number> {
    const url = '/insertOS.php';
    return axiosClient.post(url, { ...data });
  },
  insertColor(data: SpeInput): Promise<number> {
    const url = '/insertColor.php';
    return axiosClient.post(url, { ...data });
  },
  insertDisk(data: SpeInput): Promise<number> {
    const url = '/insertDisk.php';
    return axiosClient.post(url, { ...data });
  },

  // PUT
  updateCpu(data: SpeInput): Promise<number> {
    const url = '/updateCpu.php';
    return axiosClient.post(url, { ...data });
  },
  updateVga(data: SpeInput): Promise<number> {
    const url = '/updateVga.php';
    return axiosClient.post(url, { ...data });
  },
  updateRam(data: SpeInput): Promise<number> {
    const url = '/updateRam.php';
    return axiosClient.post(url, { ...data });
  },
  updateScreen(data: SpeInput): Promise<number> {
    const url = '/updateScreen.php';
    return axiosClient.post(url, { ...data });
  },
  updateOS(data: SpeInput): Promise<number> {
    const url = '/updateOS.php';
    return axiosClient.post(url, { ...data });
  },
  updateColor(data: SpeInput): Promise<number> {
    const url = '/updateColor.php';
    return axiosClient.post(url, { ...data });
  },
  updateDisk(data: SpeInput): Promise<number> {
    const url = '/updateDisk.php';
    return axiosClient.post(url, { ...data });
  },

  createSpecifications(spe: SpecificationsInput): Promise<number> {
    const url = '/specification.php';
    return axiosClient({
      method: 'post',
      url,
      data: {
        ...spe,
      },
    });
  },
};
