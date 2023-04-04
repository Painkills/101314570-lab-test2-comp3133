export interface Mission {
    flight_number: number;
    mission_name: string;
    launch_year: number;
    links: {
        mission_patch_small: string;
    };
    details: string;
}