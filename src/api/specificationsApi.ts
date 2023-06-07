import { Specifications, SpecificationsInput } from 'models';
import axiosClient from './axiosClient';

export const specificationsApi = {
  getCpus(): Promise<Specifications[]> {
    const url = '/getCpu.php';
    return axiosClient.get(url);
  },
  getVgas(): Promise<Specifications[]> {
    const url = '/getVga.php';
    return axiosClient.get(url);
  },
  getRams(): Promise<Specifications[]> {
    const url = '/getRam.php';
    return axiosClient.get(url);
  },
  getScreens(): Promise<Specifications[]> {
    const url = '/getScreen.php';
    return axiosClient.get(url);
  },
  getOS(): Promise<Specifications[]> {
    const url = '/getOS.php';
    return axiosClient.get(url);
  },
  getColors(): Promise<Specifications[]> {
    const url = '/getColor.php';
    return axiosClient.get(url);
  },
  getDisks(): Promise<Specifications[]> {
    const url = '/getDisk.php';
    return axiosClient.get(url);
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
